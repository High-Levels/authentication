from app import email_regex,requestStruct,requestMapping,responseHandler
from app.models import db
from flask import request,jsonify
from flask_jwt_extended import create_access_token,set_access_cookies,get_jwt_identity,jwt_required,unset_access_cookies,JWTManager
from json_checker import Checker
import hashlib,os
from uuid import uuid4
 
def register():
    try:
        jsonBody = request.json
        data = requestMapping.User(jsonBody)
        result = Checker(requestStruct.User(),soft = True).validate(data)
        checkUser = db.select(f"select * from tbl_user where username = '{jsonBody['userName']}' or email = '{jsonBody['email']}'")
        if jsonBody['city'] == "" or jsonBody['userName'] == "" or jsonBody['email'] == "" or jsonBody['password'] == "" or jsonBody['name'] == "" or jsonBody['gender'] == "" or jsonBody['address'] == "" or jsonBody['phoneNumber'] == "" or jsonBody['role'] == "":
            response ={ 
                "Message": "All Data Must be Filled"
            }
            return responseHandler.badRequest(response)
        elif checkUser:
            response ={
                "Message": "Username or Email already registered"
            }
            return responseHandler.badRequest(response)
        elif email_regex.match(jsonBody['email']):
            hashpassword = hashlib.md5((jsonBody['password']+ os.getenv("SALT_PASSWORD")).encode())
            createUser = (f"insert into tbl_user(id_user,username,email,password,name,gender,address,city,phone_number,date_register,role) values('{str(uuid4())}','{result['userName']}','{result['email']}','{hashpassword.hexdigest()}','{result['name']}','{result['gender']}','{result['address']}','{result['city']}','{result['phoneNumber']}',now(),'{result['role']}')")
            db.execute(createUser) 
            response={
                "Data": jsonBody,
                "Message": "Data Created"
            }
            return responseHandler.ok(response)
        else:
            response={ 
                "Message": "Email is not Valid"
            }
            return responseHandler.badRequest(response)
    except Exception as err:
        response ={
            "data": str(err),
            "message": "Bad Gateway"
        }
        return responseHandler.badGateway(response)

def login():
    try:
        jsonBody = request.json
        hashpassword = hashlib.md5((jsonBody['password']+os.getenv("SALT_PASSWORD")).encode())
        data = requestMapping.Login(jsonBody)
        result = Checker(requestStruct.Login(),soft = True).validate(data)
        user = db.select(f"select id_user,role from tbl_user where username = '{result['userName']}' and password = '{hashpassword.hexdigest()}' ")
        for i in user:
            userAuth = {
                'id':i[0],
                'role': i[1]
            }
        if user:
            access_token = create_access_token(identity=userAuth,fresh=True) 
            response = {
                "Data": {"Data": userAuth,
                         "Access Token": access_token},
                "Message": "Login Success"
            } 
            return responseHandler.ok(response)
        else:
            response ={
                "Message": "Username / Password is invalid"
            }
            return responseHandler.badRequest(response)
    except Exception as err:
        response ={
            "Data": str(err),
            "Message": "Bad Gateway"
        }
        return responseHandler.badGateway(response)

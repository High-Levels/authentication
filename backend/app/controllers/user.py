from app import app,db
from app import responseHandler
from flask_jwt_extended import jwt_required,get_jwt_identity

@jwt_required()
def listUser():
    try:
        currentUser = get_jwt_identity()
        listUser = db.execute(f"select id_user,username,email,name,gender,address,city,phone_number,password from tbl_user where role = 'user'")
        listUsers = []
        for i in listUser:
            dictUsers ={
                "userName": i[1] ,
                "email": i[2],
                "name": i[3],
                "gender": i[4],
                "address": i[5],
                "city": i[6],
                "phoneNumber": i[7],
                "password": i[8]
            }
            listUsers.append(dictUsers)
        response = {
            "Data": listUsers
        }
        return responseHandler.ok(response)
    except Exception as err:
        response = {
            "Message": str(err)
        }
        return responseHandler.badGateway(response)
def User():
    schema = { 
        "userName": str,
        "email": str,
        "password": str,
        "name": str,
        "gender": str,
        "address": str,
        "city": str,
        "phoneNumber": str,
        "role": str
    }
    return schema
    
def Login():
    schema = { 
        "userName": str,
        "password": str
    }
    return schema

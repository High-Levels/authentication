def User(jsonBody):
    data = { 
        "userName": jsonBody['userName'],
        "email": jsonBody['email'],
        "password": jsonBody['password'],
        "name": jsonBody['name'],
        "gender": jsonBody['gender'],
        "address": jsonBody['address'],
        "city": jsonBody['city'],
        "phoneNumber": jsonBody['phoneNumber'],
        "role":jsonBody['role']
    }
    return data

def Login(jsonBody):
    data = { 
        "userName": jsonBody['userName'],
        "password": jsonBody['password']
    }
    return data

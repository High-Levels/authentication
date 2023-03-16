from app import app
from app.controllers import auth,user

#AUTH
app.route('/register',methods=['POST'])(auth.register)
app.route('/login',methods=['POST'])(auth.login) 

#USER
app.route('/listUsers',methods=['GET'])(user.listUser)
from flask import Flask
from flask_mail import Mail
from flask_mail import Message


app = Flask(__name__)
app.config.update(
    #MAIL_SERVER='smtp@gmail.com',
    #MAIL_PORT=587,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'howitrate@hotmail.com',
    MAIL_PASSWORD = 'Orange!1'
)

mail = Mail(app)

def SendMail():
     msg = Message("Hello",
                  sender="howitrate@hotmail.com",
                  recipients=["amverdon@syr.edu"])

mail.send(msg)
return
from flask import Flask, render_template, request, redirect, url_for, flash, send_from_directory
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv('SECRET_KEY', 'fallback_secret_key')

app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 465))
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'True') == 'True'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

# Initialize Flask-Mail
mail = Mail(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message_content = request.form['message']

        if not name or not email or not message_content:
            flash('Please fill out all fields', 'error')
            return redirect(url_for('home'))

        # Create the email message
        msg = Message(f'New Contact Form Submission from {name}',
                      sender='sefatutercom@gmail.com',  # Gmail requires the sender to be the authenticated email
                      recipients=['sefatutercom@gmail.com'])  # Your receiving email
        msg.body = f"""
        You have received a new message from {name} ({email}).
        
        Message:
        {message_content}
        """

        try:
            mail.send(msg)  # Use the `mail` object to send the email
            flash('Message sent successfully!', 'success')
        except Exception as e:
            flash(f'Error sending message: {str(e)}', 'error')
        
        return redirect(url_for('home'))

@app.route('/dicegame')
def dice():
    return send_from_directory('static/projects/DiceGame', 'index.html')

@app.route('/drumkitgame')
def drum():
    return send_from_directory('static/projects/DrumKitGame', 'index.html')
    
@app.route('/colorgame')
def color():
    return send_from_directory('static/projects/ColorGame', 'index.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask

app=Flask(__name__) #Instaciamos la clase flask de la libreria y lo guardamos en app

@app.route('/') #Le digo la ruta 
def hello_world():
        return 'Hello World!'
    
if __name__=='__main__':
    app.run('0.0.0.0', 8080)


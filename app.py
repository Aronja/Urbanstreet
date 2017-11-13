from flask import Flask, render_template, send_from_directory
import os
app = Flask(__name__)
from authentication import requires_auth

path_of_this_file = dir_path = os.path.dirname(os.path.realpath(__file__))


@app.route("/")
@requires_auth
def layout():
    return render_template("foyer.html")


@app.route("/theatre")
@requires_auth
def showTheatre():
    return render_template('theatre.html')


@app.route("/street")
@requires_auth
def showStreet():
    return render_template('index.html')


@app.route("/activestreet")
@requires_auth
def showActiveStreet():
    return render_template('activestreet.html')

# UNITY STUFF!
@app.route('/TemplateData/<path:filename>')
def base_static_unity2(filename):
    return send_from_directory(path_of_this_file + '/TemplateData/', filename)

@app.route('/StreamingData/<path:filename>')
def base_static_unity3(filename):
    return send_from_directory(path_of_this_file + '/StreamingData/', filename)

@app.route('/Release/<path:filename>')
def base_static_unity4(filename):
    return send_from_directory(path_of_this_file + '/Release/', filename)

@app.route("/shop")
@requires_auth
def showShop():
    return render_template('shop.html')

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, use_reloader=True, host='0.0.0.0')


#send_from_directory

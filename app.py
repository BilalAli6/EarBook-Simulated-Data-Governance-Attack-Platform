from flask import Flask, render_template, request, redirect, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = request.form["username"]
        pwd = request.form["password"]
        if user == "admin" and pwd == "admin123":
            return redirect("/dashboard")
        else:
            return redirect("/failed")
    return render_template("login.html")

@app.route("/failed")
def failed():
    return render_template("failed.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/hack")
def hack():
    return render_template("hack.html")

@app.route("/hacker_dashboard")
def hacker_dashboard():
    return render_template("hacker_dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)
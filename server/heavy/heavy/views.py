from django.contrib.auth.views import logout_then_login
from django.shortcuts import render, redirect


def home(request):
    if not request.user.is_authenticated:
        return redirect("login")
    return render(request, "app.html")


def login(request):
    if request.user.is_authenticated:
        return redirect("home")
    return render(request, "login.html")


def logout(request):
    return logout_then_login(request)

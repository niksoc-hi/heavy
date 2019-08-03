from django.contrib.auth.views import logout_then_login
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response

from common import UserSerializer


def home(request):
    print(request.user)
    if not request.user.is_authenticated:
        return redirect("login")
    return render(request, "app.html")


def login(request):
    if request.user.is_authenticated:
        return redirect("home")
    return render(request, "login.html")


def logout(request):
    return logout_then_login(request)


@api_view(['GET'])
def get_current_user(request):
    return Response(UserSerializer(instance=request.user).data)

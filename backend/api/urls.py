from django.urls import path

from .views import register_user, login,privado, publico
urlpatterns = [
    path('publico',publico),
    path('privado', privado),
    path('register/', register_user, name='register_user'),
    path('login/', login, name='login')
]

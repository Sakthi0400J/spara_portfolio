from django.urls import path
from .views import contact_api

urlpatterns = [
    path('submit/', contact_api),
]
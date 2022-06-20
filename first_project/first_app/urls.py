from django.conf.urls import url
from first_app import views

url2patterns = [
    url(r'^$', views.index, name='index'),
]
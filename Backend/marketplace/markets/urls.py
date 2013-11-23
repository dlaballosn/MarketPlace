from django.conf.urls import patterns, url
from views import UserView

urlpatterns = patterns('',
    url(r'user', UserView.as_view()),
)

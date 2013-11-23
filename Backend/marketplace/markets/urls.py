from django.conf.urls import patterns, url
from views import UserView, ProductView

urlpatterns = patterns('',
    url(r'user', UserView.as_view()),
    url(r'product/list/', ProductView.as_view())
)

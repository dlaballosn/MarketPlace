from django.conf.urls import patterns, url
from views import UserView, PhotoView, StoreView #, ProductView

urlpatterns = patterns('',
    url(r'user', UserView.as_view()),
    #url(r'product/list/', ProductView.as_view()),
    url(r'photo', PhotoView.as_view()),
    url(r'store', StoreView.as_view())
)

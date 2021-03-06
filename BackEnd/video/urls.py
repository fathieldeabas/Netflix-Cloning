from django.contrib import admin
from django.urls import path
from django.urls import include, path
from . import views
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'video'
urlpatterns = [
    path('videos', views.VideoView.as_view()),
    path('video/<str:title>', views.VideoDetails.as_view()),
    path('video/<int:id>', views.VideoDetailsId.as_view()),

    # path("all", views.all_videos),
    path('movies', views.MovieView.as_view()),
    # path("movie", views.movie),
    path('serieses', views.SeriesView.as_view()),
    # path("series", views.series),

    path('action', views.Action.as_view()),
    path('fantasy', views.Fantasy.as_view()),
    path('scifi', views.SciFi.as_view()),
    path('anime', views.Anime.as_view()),
    path('comedy', views.Comedy.as_view()),
    path('drama', views.Drama.as_view()),

    path('like', views.LikeFuck.as_view()),
    path('getlike',views.Getlike.as_view()),

    
    path('dislike', views.DislikeFuck.as_view()),
    path('getdislike', views.GetDislike.as_view()),

    path('mylist', views.myList.as_view()),
    path('getmylist', views.GetMyList.as_view()),

    path('viewmylist', views.GetMyList705.as_view()),

    path('search', views.VidSearch.as_view()),
]

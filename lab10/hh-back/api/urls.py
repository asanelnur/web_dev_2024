from django.urls import path, include
from rest_framework import routers

from api import views

router = routers.DefaultRouter()
router.register(r'company', views.CompanyViewSet)
router.register(r'vacancy', views.VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('company/<int:pk>/vacancies/', views.company_vacancies),
    path('vacancies/top_ten/', views.vacancies_top_ten),
]

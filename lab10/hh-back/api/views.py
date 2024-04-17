from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets

from api import models, serializers


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = models.Company.objects.all()
    serializer_class = serializers.CompanySerializer


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer


def vacancies_top_ten(request):
    vacancies = models.Vacancy.objects.order_by('-salary')[:10]
    result = [v.to_json() for v in vacancies]
    return JsonResponse(result, safe=False, status=200)


def company_vacancies(request, pk):
    vacancies = models.Vacancy.objects.filter(company_id=pk)
    serializer = serializers.VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False, status=200)


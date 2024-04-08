from django.http import JsonResponse
from django.shortcuts import render

from api import models


def companies_list(request):
    companies = models.Company.objects.all()
    result = [c.to_json() for c in companies]
    return JsonResponse(result, safe=False, status=200)


def company_detail(request, pk):
    try:
        company = models.Company.objects.get(id=pk)
    except models.Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    return JsonResponse(company.to_json(), status=200)


def company_vacancies(request, pk):
    try:
        company = models.Company.objects.get(id=pk)
    except models.Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    vacancies = [v for v in company.vacancies.values()]
    return JsonResponse(vacancies, safe=False, status=200)


def vacancies_list(request):
    vacancies = models.Vacancy.objects.all()
    result = [v.to_json() for v in vacancies]
    return JsonResponse(result, safe=False, status=200)


def vacancy_detail(request, pk):
    try:
        vacancy = models.Vacancy.objects.get(id=pk)
    except models.Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    return JsonResponse(vacancy.to_json(), status=200)


def vacancies_top_ten(request):
    vacancies = models.Vacancy.objects.order_by('-salary')[:10]
    result = [v.to_json() for v in vacancies]
    return JsonResponse(result, safe=False, status=200)


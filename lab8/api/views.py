from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from api import models


# Create your views here.


def get_products(request):
    products = models.Product.objects.all()
    result = [product.to_json() for product in products]
    return JsonResponse(result, safe=False)


def get_product(request, id):
    product = models.Product.objects.get(id=id).to_json()
    return JsonResponse(product)


def get_categories(request):
    categories = models.Category.objects.all()
    result = [category.to_json() for category in categories]
    return JsonResponse(result, safe=False)


def get_category(request, id):
    category = models.Category.objects.get(id=id).to_json()
    return JsonResponse(category)


def get_category_products(request, id):
    products = models.Product.objects.filter(category=id)
    result = [product.to_json() for product in products]
    return JsonResponse(result, safe=False)

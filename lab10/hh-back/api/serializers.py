from rest_framework import serializers

from api import models


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()

    def create(self, validated_data):
        return models.Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Vacancy
        fields =('name', 'description', 'salary', 'company')

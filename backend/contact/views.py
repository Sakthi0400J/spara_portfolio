from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Contact

@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name = data.get("name")
            phone = data.get("phone")
            email = data.get("email")
            message = data.get("message")

            Contact.objects.create(
                name=name,
                phone=phone,
                email=email,
                message=message
            )

            return JsonResponse({"status": "success", "message": "Saved successfully"})

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)})

    return JsonResponse({"status": "error", "message": "Invalid request"})

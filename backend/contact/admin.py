from django.contrib import admin
from .models import Contact
from import_export.admin import ImportExportModelAdmin

@admin.register(Contact)
class ContactAdmin(ImportExportModelAdmin):
    list_display = ('name', 'phone', 'email', 'created_at')
    search_fields = ('name', 'email', 'phone')
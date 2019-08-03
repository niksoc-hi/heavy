from actstream import registry
from django.contrib.contenttypes.models import ContentType

name_to_model = {}
# model_to_name = {}


def register(name, model_class):
    registry.register(model_class)

    assert name not in name_to_model

    # model_to_name[model] = name
    name_to_model[name] = model_class

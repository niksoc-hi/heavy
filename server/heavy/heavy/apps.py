from django.apps import AppConfig


class HeavyConfig(AppConfig):
    name = "heavy"

    def ready(self):
        from follows.utils import register

        register("users", self.get_model("User"))

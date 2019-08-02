def save_profile_img(strategy, user, response, **kwargs):
    if "picture" in response:
        user.profile_img_url = response["picture"]
        user.save()

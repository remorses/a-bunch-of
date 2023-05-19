# Page 1

some stuff in here



|          |          |   |
| -------- | -------- | - |
| asdfasdf | asdf     |   |
| `code`   | **asdf** |   |
|          |          |   |

* [ ] a task

{% hint style="info" %}
some hint in here


{% endhint %}

> quote

```
// Some code




```

{% swagger src=".gitbook/assets/openapi.json" path="/v1/generation/{engine_id}/text-to-image" method="post" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}



{% swagger src=".gitbook/assets/openapi.json" path="/v1/generation/{engine_id}/image-to-image" method="post" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger src=".gitbook/assets/openapi.json" path="/v1/generation/{engine_id}/image-to-image/upscale" method="post" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger src=".gitbook/assets/openapi.json" path="/v1/generation/{engine_id}/image-to-image/masking" method="post" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger src=".gitbook/assets/openapi.json" path="/v1/engines/list" method="get" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger src=".gitbook/assets/openapi.json" path="/v1/user/account" method="get" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger src=".gitbook/assets/openapi.json" path="/v1/user/balance" method="get" %}
[openapi.json](.gitbook/assets/openapi.json)
{% endswagger %}

{% swagger method="get" path="" baseUrl="/some tuff" summary="asdfasdf" %}
{% swagger-description %}
asdfasdf
{% endswagger-description %}

{% swagger-parameter in="path" name="asdfasdf" type="asdfasdf" %}
asdf
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="asdfasdf" %}

{% endswagger-response %}
{% endswagger %}

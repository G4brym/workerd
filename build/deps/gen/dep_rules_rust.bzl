# WARNING: THIS FILE IS AUTOGENERATED BY update-deps.py DO NOT EDIT

load("@//:build/http.bzl", "http_archive")

TAG_NAME = "0.56.0"
URL = "https://github.com/bazelbuild/rules_rust/releases/download/0.56.0/rules_rust-0.56.0.tar.gz"
STRIP_PREFIX = ""
SHA256 = "f1306aac0b258b790df01ad9abc6abb0df0b65416c74b4ef27f4aab298780a64"
TYPE = "tgz"

def dep_rules_rust():
    http_archive(
        name = "rules_rust",
        url = URL,
        strip_prefix = STRIP_PREFIX,
        type = TYPE,
        sha256 = SHA256,
    )

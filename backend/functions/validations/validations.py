import re

validRoles = ["administrator", "assistant", "professional"]


def is_valid_role(role: str) -> bool:
    return (role in validRoles)


def is_valid_email(email: str) -> bool:
    patron = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(patron, email) is not None


def is_valid_document(document: str) -> bool:
    patron = r'^[0-9]+$'
    return re.match(patron, document) is not None

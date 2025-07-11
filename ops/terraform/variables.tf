variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}

variable "account_id" {
  type = string
}

variable "foo_name" {
  default = "multizones-poc-foo"
}

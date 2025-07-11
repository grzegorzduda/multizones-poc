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

variable "foo_production_branch" {
  type    = string
  default = "main"
}

variable "foo_zero_trust_email_domain" {
  default = "foo.com"
}
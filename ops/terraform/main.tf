resource "cloudflare_pages_project" "foo" {
  name       = var.foo_name
  account_id = var.account_id
  production_branch = var.foo_production_branch
}

resource "cloudflare_zero_trust_access_identity_provider" "foo_zero_trust_otp" {
  account_id = var.account_id
  name       = "foo-zero-trust-onetimepin"
  type       = "onetimepin"
}

resource "cloudflare_zero_trust_access_application" "foo_zero_trust_app" {
  account_id  = var.account_id
  name        = "foo-zero-trust-app"
  domain     = "*.multizones-poc-foo.pages.dev"
  type        = "self_hosted"

  session_duration           = "730h"
  http_only_cookie_attribute = true

  allowed_idps = [
    cloudflare_zero_trust_access_identity_provider.foo_zero_trust_otp.id
  ]
}

resource "cloudflare_zero_trust_access_group" "foo_zero_trust_users" {
  account_id = var.account_id
  name       = "Foo Users"

  include {
    email_domain = ["foo.com"]
  }
}

resource "cloudflare_zero_trust_access_policy" "foo_zero_trust_policy" {
  account_id      = var.account_id
  name            = "foo-policy"
  application_id  = cloudflare_zero_trust_access_application.foo_zero_trust_app.id
  decision        = "allow"
  precedence      = 1


  include {
    group = [cloudflare_zero_trust_access_group.foo_zero_trust_users.id]
  }
}
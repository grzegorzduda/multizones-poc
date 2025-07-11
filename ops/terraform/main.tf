resource "cloudflare_pages_project" "foo" {
  name       = var.foo_name
  account_id = var.account_id
}

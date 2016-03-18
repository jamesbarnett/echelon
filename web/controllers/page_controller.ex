defmodule Echelon.PageController do
  use Echelon.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

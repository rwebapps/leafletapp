#' Example leaflet widget
#'
#' Hello world of leaflet htmlwidget wrapped in OpenCPU. Based on example:
#' \url{http://rstudio.github.io/leaflet/}.
#'
#' @export
#' @param title label for the marker
#' @param lat lattitude coordinate
#' @param lng longintude coordinate
make_map <- function(title = "This is a test", lat, lng){
  m <- leaflet::leaflet()
  m <- leaflet::addTiles(m)
  m <- leaflet::addMarkers(m, lng = as.numeric(lng), lat = as.numeric(lat), popup = title)
  htmlwidgets::saveWidget(m, "mymap.html", selfcontained = FALSE)
}

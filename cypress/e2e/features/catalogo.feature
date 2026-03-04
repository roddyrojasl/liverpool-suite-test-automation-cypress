Feature: Catalogo de productos

  Scenario: filtrar productos por mayor descuento
    Given cargo la home page de Liverpool
    When accedo al catalogo de productos
    And aplico el filtro de mayor descuento
    Then se muestran los productos con mayor descuento

  Scenario: añadir producto al carrito
    Given cargo la home page de Liverpool
    When accedo al catalogo de productos
    And selecciono un producto
    And agrego el producto al carrito
    Then se muestra el producto en el carrito

Feature: Buscador de productos

  Scenario: Buscar producto por nombre
    Given cargo la home page de Liverpool
    When busco el producto por nombre
    Then se muestra el producto buscado por nombre

  Scenario: Buscar producto por codigo
    Given cargo la home page de Liverpool
    When busco el producto por codigo
    Then se muestra el producto buscado por codigo


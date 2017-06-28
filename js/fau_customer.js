/**
 * This file is used to autocomplete on customer fields on the invoice creation.
 */
(function ($) {
    Drupal.behaviors.fauCustomer = {
        attach: function (context, settings) {

            // Once the autocomplete is selected.
            $('#edit-field-invoice-client-nif-cif-und-0-value').bind(
                'autocompleteSelect', function(event, node) {

                    // Get data from database using the selected CIF as the parameter.
                    $.getJSON(
                        Drupal['settings']['basePath'] + "js/customer/cif/" + this['value'], function( data ) {

                            // Populate form fields.
                            $('#edit-field-invoice-client-name-und-0-value').val(data["name"]);
                            $('#edit-field-invoice-client-address-und-0-value').val(data["address"]);
                        }
                    );
                }
            );
        }
    };
}(jQuery));

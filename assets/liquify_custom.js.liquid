document.addEventListener('alpine:init', () => {
    Alpine.data('handleVariant', (pProduct = null, optionsByName = null, selectedOrFirstAvailable = null) => ({
        bundle: {},
        product: pProduct,
        options_by_name: optionsByName,
        options: pProduct?.options,
        variants: pProduct?.variants,
        selected_or_first_available_variant: selectedOrFirstAvailable,
        variantImage: selectedOrFirstAvailable?.featured_image?.src,
        selected_product_id: selectedOrFirstAvailable?.id,
        quantity: 1,
        _price: selectedOrFirstAvailable?.price ?? 0,
        addToCartButton: true,
        firstOptionHasAvailableChildren: {},
        selectorType: 'radio',

        // Use init for debugging
        // init() {
        //     console.log('Shopify', Shopify)
        //     console.log('product', this.product)
        //     console.log('options_by_name', this.options_by_name)
        //     console.log('selected_or_first_available_variant', this.selected_or_first_available_variant)
        // },

        qs(selector) {
            return document.querySelector(selector)
        },

        set price(value) {
            if (isNaN(value)) {
                throw new Error('price have to be a number');
            }
            this._price = value;
        },

        get price() {
            const price = new Intl.NumberFormat(Shopify.locale + '-' + Shopify.country, {
                style: 'currency',
                currency: Shopify.currency.active,
            });
            return price.format(this._price / 100 ?? 0);
        },

        updateVariantStatuses() {
            let formId = "#product_form_" + this.product.id + " "
            const selectedOptionOneVariants = this.variants.filter((variant) => {
                    let querySelector = formId + '[data-productVariantsLoop] input[type="radio"]:checked'
                    if (this.selectorType === 'select') {
                        querySelector = formId + '[data-productVariantsLoop] select'
                    }
                    return document.querySelector(querySelector)?.value === variant.option1
                }
            );

            const inputWrappers = [...document.querySelectorAll(formId + '[data-ProductVariantsLoop]')];

            inputWrappers.forEach((option, index) => {
                if (index === 0) return;
                let optionInputs = [...option.querySelectorAll('input[type="radio"]')];
                if (this.selectorType === 'select') {
                    optionInputs = [...option.querySelectorAll('option')];
                }
                const previousOptionSelected = inputWrappers[index - 1].querySelector(':checked').value;
                const availableOptionInputsValue = selectedOptionOneVariants
                    .filter((variant) => variant.available && variant[`option${index}`] === previousOptionSelected)
                    .map((variantOption) => variantOption[`option${index + 1}`]);
                this.setInputAvailability(optionInputs, availableOptionInputsValue);

            });
        },

        setInputAvailability(listOfOptions, listOfAvailableOptions) {
            listOfOptions.forEach((input) => {
                if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
                    input.classList.remove('disabled');
                    input.removeAttribute('disabled');

                } else {
                    input.classList.add('disabled');
                    input.setAttribute('disabled', '');
                }
            });

        },

        activateVariants() {
            this.selectorType = document.querySelector('[data-selectorType]')?.dataset?.selectortype ?? this.selectorType


            this.variants.map((variant) => {
                if (this.firstOptionHasAvailableChildren[variant?.option1] === undefined) {
                    this.firstOptionHasAvailableChildren[variant?.option1] = 0;
                }
                this.firstOptionHasAvailableChildren[variant?.option1] += variant?.available;
            });

            const option1 = this.getVariantElement(this.options?.[0]);
            const option2 = this.getVariantElement(this.options?.[1]);
            const option3 = this.getVariantElement(this.options?.[2]);
            if (option1) {
                this.activateVariant(option1)
            }
            if (option2) {
                this.activateVariant(option2)
            }
            if (option3) {
                this.activateVariant(option3)
            }
            this.updateVariantStatuses()

            // @todo: Replace with CSS
            const css = ' [data-ProductVariantsLoop] input[type=radio]:disabled+span, ' +
                ' [data-ProductVariantsLoop] input[type=radio].disabled+span{ ' +
                ' text-decoration: line-through; ' +
                ' opacity: .5; ' +
                ' } ' +
                ' .button.max-width-full.w-button:disabled, ' +
                ' .button.max-width-full.w-button[disabled] { ' +
                '  cursor: not-allowed; ' +
                ' }';
            const style = document.createElement("style")
            const head = document.getElementsByTagName('head')[0]
            head.appendChild(style)
            style.appendChild(document.createTextNode(css));
        },

        activateVariant(element) {
            element.previousElementSibling.classList.add('w--redirected-checked')
        },

        /**
         * Holt aus der übergebenen Optionsgruppe den Wert des selektierten Redio-Buttons
         */
        checkedVariantValue(optionName) {
            return this.getVariantElement(optionName)?.value;
        },

        /**
         * Holt aus der übergebenen Optionsgruppe das selektierte Element
         */
        getVariantElement(optionName) {
            let formId = "#product_form_" + this.product.id + " "

            let selector = formId + "[data-productVariantsLoop] input[name='" + optionName + "']:checked"
            if (this.selectorType === 'select') {
                selector = formId + "[data-productVariantsLoop] select[name='" + optionName + "'] option:checked"
                if (this.qs(selector)?.disabled) {
                    selector = formId + "[data-productVariantsLoop] select[name='" + optionName + "'] option:not([disabled])"
                }
            }
            return this.qs(selector) ? this.qs(selector) : '';
        },

        filterVariants() {
            const option1 = this.checkedVariantValue(this.options?.[0]);
            const option2 = this.checkedVariantValue(this.options?.[1]);
            const option3 = this.checkedVariantValue(this.options?.[2]);

            let selectedOptions = [
                option1,
                option2,
                option3,
            ];
            selectedOptions = (selectedOptions.filter(i => i)).join('-')

            let possibleProducts = []
            for (const variant of this.variants) {
                let variantString = [
                    option1 ? variant?.option1 : undefined,
                    option2 ? variant?.option2 : undefined,
                    option3 ? variant?.option3 : undefined,
                ];
                variantString = (variantString.filter(i => i)).join('-')

                if (selectedOptions === variantString) {
                    possibleProducts.push(variant)
                }
            }

            return possibleProducts;
        },

        setVariant() {
            this.updateVariantStatuses()
            const matchedProducts = this.filterVariants()

            if (matchedProducts.length !== 1) {
                console.warn('Keine eindeutige Variante', matchedProducts)
                //this.updateVariantStatuses()
                this.addToCartButton = false
                return
            }

            this.addToCartButton = true

            const matchedProduct = matchedProducts[0];
            console.log('matchedProducts', matchedProduct)
            this.selected_product_id = matchedProduct.id
            this.variantImage = matchedProduct?.featured_image?.src
            this.price = matchedProduct?.price;
            this.selected_or_first_available_variant = matchedProduct;
        },

        getAddToCartBody(products) {
            return JSON.stringify({
                'items': products.map(product => ({
                    id: product.id,
                    quantity: product.quantity ?? 1,
                }))
            });
        },

        callAddToCartApi(body) {
            return fetch(window.Shopify.routes.root + 'cart/add.js', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: body
            })
        },

        /**
         * Add all products to cart.
         */
        async addToCartWithBundle() {
            console.log('addToCartWithBundle() called!');

            // Map all bundle products
            const products = Object.entries(this.bundle).map(([key, value]) => ({
                id: value,
                quantity: 1
            }))

            // Add selected product
            products.push({
                id: this.selected_product_id ?? this.selected_or_first_available_variant?.id,
                quantity: this.quantity ?? 1,
            })

            // Create body with all products
            let body = this.getAddToCartBody(products);

            // Single API call for all products
            try {
                let response = await this.callAddToCartApi(body);
                let data = await response.json();
                console.log('Items added (addToCartWithBundle()):', data.items);
                this.products = data.items;

                // Trigger dropdown click to open minicart
                let elements = document.querySelectorAll('[li-element="mini-cart-trigger"]');
                elements.forEach(element => {
                    let closestDropdown = element.closest('.w-dropdown-toggle');
                    if (closestDropdown) {
                        LiquifyHelper.triggerClick(closestDropdown);
                    }
                });

                console.log('All items added!');
                this.$dispatch('cartupdated');
                this.$dispatch('toggleminicart');
                this.$dispatch('showcartmessage', {
                    status: data.status,
                    message: data.message,
                    description: data.description
                });
            } catch (error) {
                console.error('Error in add to cart with bundle:', error);
                this.$dispatch('showcartmessage', {
                    status: error.status,
                    message: error.message,
                    description: error.description
                });
            }
        },

        addToCartAndKeepOpen(productId = undefined, quantity = undefined) {
            console.log('add to cart (keep open) called, available:', this.selected_or_first_available_variant.available);
        
            if (!this.selected_or_first_available_variant.available) {
                return;
            }
        
            console.log('productId', productId ?? this.selected_product_id ?? this.selected_or_first_available_variant?.id);
            let body = JSON.stringify({
                'items': [
                    {
                        id: productId ?? this.selected_product_id ?? this.selected_or_first_available_variant?.id,
                        quantity: quantity ?? this.quantity ?? 1,
                    }
                ]
            });
        
            fetch(window.Shopify.routes.root + 'cart/add.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Item (addToCartAndKeepOpen): ', data, data.items);
                    this.products = data.items;
        
                    // Skip the dropdown trigger and cart toggle here
                    console.log('product added');
                    console.log('Dispatch cart events');
                    this.$dispatch('cartupdated'); // Dispatch cart updated event to refresh cart content
        
                    this.$dispatch('showcartmessage', {
                        status: data.status,
                        message: data.message,
                        description: data.description
                    });
                })
                .catch((error) => {
                    console.error('addToCartAndKeepOpen error:', error);
                    this.$dispatch('showcartmessage', {
                        status: error.status,
                        message: error.message,
                        description: error.description
                    });
                });
        },
        

        /**
         * Add a single product to cart.
         */
        addToCart(productId = undefined, quantity = undefined) {
            console.log('add to cart called, available:', this.selected_or_first_available_variant.available);

            if (!this.selected_or_first_available_variant.available) {
                return
            }

            console.log('productId', productId ?? this.selected_product_id ?? this.selected_or_first_available_variant?.id,);
            let body = JSON.stringify({
                'items': [
                    {
                        id: productId ?? this.selected_product_id ?? this.selected_or_first_available_variant?.id,
                        quantity: quantity ?? this.quantity ?? 1,
                    }
                ]
            });

            fetch(window.Shopify.routes.root + 'cart/add.js', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Item (addToCart()): ', data, data.items);
                    this.products = data.items;

                    // Trigger dropdown click to open minicart
                    let elements = document.querySelectorAll('[li-element="mini-cart-trigger"]');
                    elements.forEach(element => {
                        let closestDropdown = element.closest('.w-dropdown-toggle');
                        if (closestDropdown) {
                            LiquifyHelper.triggerClick(closestDropdown);
                        }
                    });

                    console.log('product added');
                    console.log('Dispatch cart events');
                    this.$dispatch('cartupdated');
                    this.$dispatch('toggleminicart');
                    this.$dispatch('showcartmessage', {
                        status: data.status,
                        message: data.message,
                        description: data.description
                    });
                })
                .catch((error) => {
                    console.error('addToCart error:', error);
                    this.$dispatch('showcartmessage', {
                        status: error.status,
                        message: error.message,
                        description: error.description
                    });
                });
        },

        /**
         * Format monetary values.
         */
        moneyFormat(value, minor = true) {
            return LiquifyHelper.moneyFormat(value, minor)
        },
    }));
})



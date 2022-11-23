 _updateUnitPrice: function(variant) {
        document.querySelectorAll("span.perunit").forEach(function(el){
          el.style.display = 'none';
        });
        document.querySelector("span[data-variant-id='"+variant.id+"']").style.display = "inline";
        if (this.currentVariant && variant.unit_price === this.currentVariant.unit_price) {
          return;
        }
  
        this.container.dispatchEvent(new CustomEvent('variantUnitPriceChange', {
          detail: {
            variant: variant
          }
        }));
      },
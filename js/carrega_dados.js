document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('products-grid');

    if (grid) { // Só executa se estiver na página com o ID 'products-grid'
        async function carregarProdutos() {
            try {
                const response = await fetch('dados.json');
                
                if (!response.ok) {
                    throw new Error(`Erro ao carregar dados: ${response.statusText}. Verifique se 'dados.json' está no local correto.`);
                }

                const produtos = await response.json();
                
                produtos.forEach(produto => {
                    const item = document.createElement('div');
                    item.className = 'product-item';

                    item.innerHTML = `
                        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
                        <div class="product-info">
                            <h3>${produto.nome}</h3>
                            <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <span class="product-status">${produto.status}</span>
                    `;
                    
                    grid.appendChild(item);
                });

            } catch (error) {
                console.error('Falha ao carregar produtos:', error);
                grid.innerHTML = `<p>Não foi possível carregar os produtos. Erro: ${error.message}</p>`;
            }
        }

        carregarProdutos();
    }
});
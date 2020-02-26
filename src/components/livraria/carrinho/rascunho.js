//Carrinho.js

<div className="">
    <Header />
    <div className="">
        <div className="form">
            <div className="rol linhaItem">
                {
                    this.state.vet_carrinho.map((item, index) => 
                        <ItemCarrinho
                            item={item}
                            key={index}
                        />
                    )
                }

                <div className="col colunaSoma">
                    <span>
                        Total da compra: {this.state.total_compra}
                    </span>
                </div>
                <div className="col colunaBotao">
                    <button type="button" className="btn btn-success" onClick={this.onClick}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>


//itemCarrinho

<div className="col colunaItem">
    <span className="campo">
        Titulo
    </span>
    <span className="textoItem">
        {this.props.item.titulo}
    </span>
    <span className="campo">
        Preço
    </span>
    <span className="textoItem">
        {this.props.item.preco}
    </span>
    <button type="button" className="btn btn-danger" name="excluir">
        remover
    </button>
</div>
import MeuPedido from "../MeuPedido";
import tenisprodutos from "./tenismeuproduto.png"

export default function ContainerMeusPed(){    
    return(
        <div className="containermeusprod">
            <table className="tabelaProd">
            <th><h3>Meus Pedidos</h3></th>
            <th className="tabelaProdTH">STATUS</th>
            <tbody>
                    <tr className="bordertoptabela">
                    <td> <MeuPedido imagem={tenisprodutos} idpedido="2234981932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                    <td className="statusProd"> Produto em Transito</td>
                </tr>
                <tr className="bordertoptabela" >
                <td> <MeuPedido imagem={tenisprodutos} idpedido="4495810492" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin"> Finalizado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenisprodutos} idpedido="4495810492" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdCan">Cancelado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenisprodutos} idpedido="44958104921932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin"> Finalizado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenisprodutos} idpedido="44958104921932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin">Finalizado</td>
                </tr>

            </tbody>
            </table>
       </div>

    )
} 
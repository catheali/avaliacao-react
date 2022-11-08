import MeuPedido from "../MeuPedido";
import tenis2 from './tenis2.png.png'

export default function ContainerMeusPed(){    
    return(
        <div className="containermeusprod">
            <table className="tabelaProd">
            <th><h3>Meus Pedidos</h3></th>
            <th className="tabelaProdTH">STATUS</th>
            <tbody>
                    <tr className="bordertoptabela">
                    <td> <MeuPedido imagem={tenis} idpedido="2234981932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                    <td className="statusProd"> Produto em Transito</td>
                </tr>
                <tr className="bordertoptabela" >
                <td> <MeuPedido imagem={tenis2} idpedido="4495810492" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin"> Finalizado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenis2} idpedido="4495810492" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdCan">Cancelado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenis2} idpedido="44958104921932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin"> Finalizado</td>
                </tr>
                <tr className="bordertoptabela">
                <td> <MeuPedido imagem={tenis2} idpedido="44958104921932" nomepedido="Tênis Nike Revolution 6 Next Nature Masculino" /></td>
                <td className="statusProdFin">Finalizado</td>
                </tr>

            </tbody>
            </table>
       </div>

    )
} 
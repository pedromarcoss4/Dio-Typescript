"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
    }
    function patio() {
        function ler() {
            return .localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salva) {
            const row = document.createElement("tr");
            row.innerHTML = `
                      <td>${carro.nome}</td>
                      <td>${carro.placa}</td>
                      <td data-time="${carro.entrada}">
                          ${carro.entrada.toLocaleString("pt-BR", {
                hour: "numeric",
                minute: "numeric",
            })}
                      </td>
                      <td>
                          <button class="delete">x</button>
                      </td>
                  `;
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
        }
        function salvar(veiculos) {
            localStorage.selfItem("patio", JSON.stringify(veiculos));
            const tempo = calctempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm('O veiculo ${nome} permaneceu por   ${tempo}. Deseja encerrar?'))
                return;
            salvar(ler().filter((veiculo)), veiculos.placa !== placa);
            ;
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio)
                length;
            {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const nome = $("#nome").value;
        const placa = $("#placa").value;
        console.log({ nome, placa });
        if (!nome || !placa) {
            alert("os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();

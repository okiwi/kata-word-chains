var assert = require('chai').assert;
describe('Word Chains', function() {
    it('devrait retourner un tableau', function () {
        assert.isArray(wordChains('cat','dog'));
    });
    it('devrait commencer par le mot de départ', function () {
        assert.equal(wordChains('cat','dog').shift(), 'cat');
        assert.equal(wordChains('dog','cat').shift(), 'dog');
    });
    it("devrait finir par le mot d'arrivée", function () {
        assert.equal(wordChains('cat','dog').pop(), 'dog');
        assert.equal(wordChains('dog','cat').pop(), 'cat');
    });
    it("devrait contenir au moins autant d'éléments que de nombre de lettres différentes, + 1", function () {
        assert.ok(wordChains('dog','cat').length >= 4);
    });
    it("devrait contenir 2 éléments si une seule lettre diffère", function () {
        assert.equal(wordChains('cat','cot').length, 2);
    });
    xit("ne devrait contenir que des mots uniques", function () {
        assert.equal(['cat', 'cot'], wordChains('cat','cot'));
    });
});
function wordChains(motDépart, motArrivée){
    var tabFinal = [];
    tabFinal.push(motDépart);
    for(var i = 1; i < nombreDeLettresDifférentes(motDépart,motArrivée) ; i++) {
        tabFinal.push(motDépart);
    }
    tabFinal.push(motArrivée);
    return tabFinal;
}
function nombreDeLettresDifférentes(mot1, mot2){
    var diff = 0;
    for(var i in mot1){
        if(mot1[i]!=mot2[i])diff++;
    }
    return diff;
}
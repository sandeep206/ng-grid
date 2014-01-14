describe('ui.grid.util', function() {
  var gridUtil,
      $window;

  beforeEach(module('ui.grid.util'));

  beforeEach(inject(function(_gridUtil_, _$window_) {
    gridUtil = _gridUtil_;
    $window = _$window_;
  }));

  describe('newId()', function() {
    it('creates a unique id each time it is called', function() {
      var id1 = gridUtil.newId();
      var id2 = gridUtil.newId();

      expect(id1).not.toEqual(id2);
    });
  });

  describe('readableColumnName', function() {
    it('does not throw with null name', function() {
      expect(function() {
        gridUtil.readableColumnName(null);
      }).not.toThrow();
    });

    it('should create readable column names from properties', function() {
      var translationExpects = [
        [0, '0'],
        ['property', 'Property'],
        ['Property', 'Property'],
        ['aProperty', 'A Property'],
        ['ThisProperty', 'This Property'],
        ['thisSecondProperty', 'This Second Property'],
        ['thingsILove', 'Things I Love'],
        ['a_property', 'A Property'],
        ['a__property', 'A Property'],
        ['another_property', 'Another Property'],
        ['ALLCAPS', 'Allcaps'],
        ['address.city', 'Address.City'],
      ];

      angular.forEach(translationExpects, function (set) {
        var strIn = set[0];
        var strOut = set[1];
        
        expect(gridUtil.readableColumnName(strIn)).toEqual(strOut);
      });
    });

    it('handles multiple capitlization->separations', function() {
      var multiCapsed = gridUtil.readableColumnName('thisIsSoCool');

      expect(multiCapsed).toEqual('This Is So Cool');
    });
  });

  describe('getColumnsFromData', function() {
    it('should create column defs from a data array', function() {
      var data = [
        {
          firstName: 'Bob',
          lastName: 'Smith'
        }
      ];

      var columns = gridUtil.getColumnsFromData(data);

      expect(columns)
      .toEqual([
        {
          field: 'firstName',
          name: 'First Name'
        },
        {
          field: 'lastName',
          name: 'Last Name'
        }
      ]);
    });
  });

  describe('element calculations', function() {
    var elm;

    beforeEach(function() {
      elm = document.createElement('div');
      elm.style.height = "300px";
      elm.style.width = "200px";
      document.body.appendChild(elm);
    });

    afterEach(function() {
      angular.element(elm).remove();
      elm = null;
    });

    describe('elementWidth()', function () {
      it('should calculate element width', function() {
        //var elm = angular.element('<div style="width: 200px">asdf</div>');
        // dump(elm.ownerDocument.defaultView.getComputedStyle(elm, null)['width']);

        var w = gridUtil.elementWidth(elm);

        expect(w).toEqual(200);
      });
    });

    describe('elementHeight()', function () {
      it('should calculate element height', function() {
        var w = gridUtil.elementHeight(elm);

        expect(w).toEqual(300);
      });
    });

    describe('elementWidth()', function () {
      it('should calculate element width', function() {
        //var elm = angular.element('<div style="width: 200px">asdf</div>');
        // dump(elm.ownerDocument.defaultView.getComputedStyle(elm, null)['width']);

        var w = gridUtil.elementWidth(elm);

        expect(w).toEqual(200);
      });
    });

    describe('outerElementHeight()', function () {
      it('should calculate element height, including border', function() {
        elm.style.border = "1px solid black";
        var w = gridUtil.outerElementHeight(elm);

        expect(w).toEqual(302);
      });
    });

    describe('outerElementWidth()', function () {
      it('should calculate element Width, including border', function() {
        elm.style.border = "1px solid black";
        var w = gridUtil.outerElementWidth(elm);

        expect(w).toEqual(202);
      });
    });
  });
});
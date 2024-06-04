$(document).ready(function () {
  // Denotes total number of rows
  var rowIdx = 0;

  // jQuery button click event to add a row
  $("#addRowTable").on("click", function () {
    // Adding a row inside the tbody.
    $("#tbody").append(`<tr id="R${++rowIdx}">
															<td>
																	<select class="form-control type" id="isType${rowIdx}">
																			<option value="text">text</option>
																			<option value="select">select</option>
																			<option value="number">number</option>
																	</select>
															</td>
															<td>
																	<select class="form-control" id="isClass${rowIdx}">
																			<option value="">string</option>
																			<option value="datepicker maskdate">datepicker maskdate</option>
																			<option value="number">number</option>
																	</select>
															</td>
															<td><textarea class="form-control" id="isParamName${rowIdx}"></textarea></td>
															<td>
																	<button class="btn btn-danger remove" type="button">Remove</button>
															</td>
													</tr>`);
  });

  // jQuery button click event to remove a row.
  $("#tbody").on("click", ".remove", function () {
    // Getting all the rows next to the row
    // containing the clicked button
    var child = $(this).closest("tr").nextAll();

    // Iterating across all the rows
    // obtained to change the index
    child.each(function () {
      // Getting <tr> id.
      var id = $(this).attr("id");

      // Getting the <p> inside the .row-index class.
      var idx = $(this).children(".row-index").children("p");

      // Gets the row number from <tr> id.
      var dig = parseInt(id.substring(1));

      // Modifying row index.
      idx.html(`Row ${dig - 1}`);

      // Modifying row id.
      $(this).attr("id", `R${dig - 1}`);
    });

    // Removing the current row.
    $(this).closest("tr").remove();

    // Decreasing total number of rows by 1.
    rowIdx--;
  });

  $("#generate").on("click", function () {
    let kode_mq = $("#kode_mq").val();
    let name_mq = $("#name_mq").val();
    let param = [];
    let sql = $("#sql").val();

    param = [];
    let type = $(".type", "tr", "td", "#tbody");
    for (let i = 1; i < type.length + 1; i++) {
      let isType = $("#isType" + i, "tr", "td", "#tbody").val();
      let isClass = $("#isClass" + i, "tr", "td", "#tbody").val();
      let isParamName = $("#isParamName" + i, "tr", "td", "#tbody").val();

      param.push({
        type: isType,
        class: isClass,
        param_name: isParamName,
      });
    }

    // example::
    // --IND-006 cek log status by policy id
    // select id,updated_date,flg_status,old_status,new_status,flg_remark,remark,analysis,data,trx_code
    // from life_individu_policy_status_update where policy_id=v_policy_id::varchar;
    // order by 2,3;

    console.log("param", param);
    console.log("param", JSON.stringify(param));

    let result = ``;
    result += `INSERT INTO public.module_query`;
    result += `(id, kode_query, "module", param, query, created_date, created_by)`;
    result += `\n`;
    result += `VALUES(uuid(), '${kode_mq}', '${name_mq}', '${JSON.stringify(
      param
    )}'::jsonb, '${btoa(sql)}', now(), NULL);`;

    $("#result").val(result);
  });
});

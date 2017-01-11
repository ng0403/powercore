package com.crm.cp.utils;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jxl.biff.FontRecord;
import jxl.format.Alignment;
import jxl.format.Border;
import jxl.format.BorderLineStyle;
import jxl.format.Colour;
import jxl.format.VerticalAlignment;
import jxl.write.BoldStyle;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

import org.springframework.web.servlet.view.document.AbstractJExcelView;

import com.crm.cp.sales.teamgoal.vo.TeamExcelViewVo;

public class ExcelDownView extends AbstractJExcelView {

	@Override
	protected void buildExcelDocument(Map<String, Object> model,
			WritableWorkbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("호출");
		List<TeamExcelViewVo> viewList = (List<TeamExcelViewVo>) model.get("viewList");
		
		String filename = "팀별목표.xls";
		response.setHeader("Content-Disposition", "attachment; fileName=\""+java.net.URLEncoder.encode(filename, "UTF-8")+"\";charset=\"UTF-8\"");	
		
		//엑셀 파일 생성 호출
		makeExcelFile(workbook, viewList);
	}
	
	/**
	 * 엑셀 파일 생성
	 *   - 파일 생성 후 Title 지정 함수 및 내용 지정 함수를 호출
	 * @param workbook
	 * @param viewList
	 */
	private void makeExcelFile(WritableWorkbook workbook, List<TeamExcelViewVo> viewList) {
		System.out.println("너도!!");
		WritableSheet ws = workbook.createSheet("팀별목표", 0);
		
		try {
			//엑셀 문서내의 Title 지정
			setExcelTitle(ws);
			// 문서내의 내용 지정
			setExcelContent(ws, viewList);
		} catch (RowsExceededException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WriteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 엑셀 문서 내용 Set 함수
	 * @param ws
	 * @param viewList
	 */
	private void setExcelContent(WritableSheet ws, List<TeamExcelViewVo> viewList) {
		for (int j=2; j < viewList.size() +2; j++) {
			try {
				ws.addCell((new Label(1,j, viewList.get(j-2).getBase_year()+"")));
				ws.addCell((new Label(2,j, viewList.get(j-2).getOrg_id()+"")));
				ws.addCell((new Label(3,j, viewList.get(j-2).getOrg_nm()+"")));
			} catch (RowsExceededException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (WriteException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
	}
	
	/**
	 * 엑셀 문서 Title Set 함수
	 * @param ws
	 * @throws RowsExceededException
	 * @throws WriteException
	 */
	private void setExcelTitle(WritableSheet ws) throws RowsExceededException, WriteException {

		WritableCellFormat normalFormat = new WritableCellFormat();
		FontRecord fr = new FontRecord("돋움", 11, BoldStyle.BOLD.getValue(), false, 0, Colour.BLACK.getValue(), 0) {};
		normalFormat.setBackground(Colour.YELLOW);
		normalFormat.setFont(fr);
		normalFormat.setBorder(Border.ALL, BorderLineStyle.THIN);
		normalFormat.setAlignment(Alignment.CENTRE);
		
		ws.addCell((new Label(1,1,"년도", normalFormat)));
		ws.addCell((new Label(2,1,"부서코드", normalFormat)));
		ws.addCell((new Label(3,1,"부서명", normalFormat)));
		ws.addCell((new Label(4,1,"1월 목표" ,normalFormat)));
		ws.addCell((new Label(5,1,"2월 목표", normalFormat)));
		ws.addCell((new Label(6,1,"3월 목표", normalFormat)));
		ws.addCell((new Label(7,1,"4월 목표", normalFormat)));
		ws.addCell((new Label(8,1,"5월 목표", normalFormat)));
		ws.addCell((new Label(9,1,"6월 목표", normalFormat)));
		ws.addCell((new Label(10,1,"7월 목표", normalFormat)));
		ws.addCell((new Label(11,1,"8월 목표", normalFormat)));
		ws.addCell((new Label(12,1,"9월 목표" ,normalFormat)));
		ws.addCell((new Label(13,1,"10월 목표", normalFormat)));
		ws.addCell((new Label(14,1,"11월 목표", normalFormat)));
		ws.addCell((new Label(15,1,"12월 목표" , normalFormat)));
		
		// Cell 넓이 지정
		ws.setColumnView(1, 6);
		ws.setColumnView(2, 12);
		ws.setColumnView(3, 15);
		
		for (int i=3; i < 16; i ++) {
			ws.setColumnView(i, 15);
		}
		
		
	}
}

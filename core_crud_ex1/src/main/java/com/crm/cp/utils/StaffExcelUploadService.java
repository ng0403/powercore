package com.crm.cp.utils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

//import com.crm.cp.sales.staffgoal.vo.StaffGoalVo;
//import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/059 
 * 내용 : 엑셀 업로드 기능 클래스
 * 
 */

public class StaffExcelUploadService {

	/**
	 * 엑셀 파일 업로드
	 * @param request
	 * @return
	 */
	/*public List<StaffGoalVo> excelFileUpload(MultipartHttpServletRequest request) {
		System.out.println("!!!!");
		String uploadPath = "C:/upload/";
		List<StaffGoalVo> list = null;
		
		File dir = new File(uploadPath);
		if(!dir.isDirectory()) {
			dir.mkdirs();
		}
		System.out.println("파일명 : "+request.getFileNames());
		Iterator<String> iter = request.getFileNames();
		
		while(iter.hasNext()) {
			String uploadFileName = iter.next();
			MultipartFile mFile =request.getFile(uploadFileName);
			String fileName = mFile.getOriginalFilename();
			list = new ArrayList<StaffGoalVo>();
			if(fileName != null && !fileName.equals("")) {
				File file = null;
				
				try {
					file = new File(uploadPath+fileName);
//					System.out.println(file);
					// 1. 파일 업로드
					mFile.transferTo(file);
					
					//2. 리스트 조회
					list = readExcelFile(file);
					
				}catch(Exception e) {
					e.printStackTrace();
				}finally {
					// 최종 수행 후 파일은 남기지 않음.
					if ( file != null && file.exists()){
                        file.delete();
                    }

				}
			}
		}
		return list;
	}*/
	
	/**
	 * 	 * 엑셀 내용 읽어오기
	 * @param file
	 * @return
	 * @throws IOException
	 * @throws BiffException
	 */
	/*private List<StaffGoalVo> readExcelFile(File file) throws IOException, BiffException {
		List<StaffGoalVo> list = new ArrayList<StaffGoalVo>();
		StaffGoalVo staffGoalVo = null;
		Workbook book = Workbook.getWorkbook(file);
		
		Sheet sheet = book.getSheet(0);
		
		int rowCount = sheet.getRows();
		System.out.println("Cell Row 수 : "+rowCount);
		
		for(int row=2; row< rowCount; row++) {
			staffGoalVo = new StaffGoalVo();
			
			//Cell 내용 가져옴
			Cell c1 = sheet.getCell(1,row);
			Cell c2 = sheet.getCell(2,row);
			Cell c3 = sheet.getCell(3,row);
			Cell c4 = sheet.getCell(4,row);
			Cell c5 = sheet.getCell(5,row);
			Cell c6 = sheet.getCell(6,row);
			Cell c7 = sheet.getCell(7,row);
			Cell c8 = sheet.getCell(8,row);
			Cell c9 = sheet.getCell(9,row);
			Cell c10 = sheet.getCell(10,row);
			Cell c11 = sheet.getCell(11,row);
			Cell c12 = sheet.getCell(12,row);
			Cell c13 = sheet.getCell(13,row);
			Cell c14 = sheet.getCell(14,row);
			Cell c15 = sheet.getCell(15,row);
			Cell c16 = sheet.getCell(16,row);
			Cell c17 = sheet.getCell(17,row);
			
			//변수 저장 
			String baseyear = c1.getContents();
			String org_id = c2.getContents();
			String org_nm = c3.getContents();
			String reg_id = c4.getContents();
			System.out.println("등록자 아이디 : "+reg_id);
			String iuser_nm = c5.getContents();
			System.out.println("등록자 아이디 : "+iuser_nm);
			long jan_amt = Long.parseLong(c6.getContents());
			long feb_amt = Long.parseLong(c7.getContents());
			long mar_amt = Long.parseLong(c8.getContents());
			long apr_amt = Long.parseLong(c9.getContents());
			long may_amt = Long.parseLong(c10.getContents());
			long jun_amt = Long.parseLong(c11.getContents());
			long jly_amt = Long.parseLong(c12.getContents());
			long agt_amt = Long.parseLong(c13.getContents());
			long sep_amt = Long.parseLong(c14.getContents());
			long oct_amt = Long.parseLong(c15.getContents());
			long nov_amt = Long.parseLong(c16.getContents());
			long dec_amt = Long.parseLong(c17.getContents());
			
			// Vo에 저장
			staffGoalVo.setBase_year(baseyear);
			staffGoalVo.setOrg_id(org_id);
			staffGoalVo.setOrg_nm(org_nm);
			staffGoalVo.setReg_id(reg_id);
			staffGoalVo.setIuser_nm(iuser_nm);
			staffGoalVo.setJan_amt(jan_amt);
			staffGoalVo.setFeb_amt(feb_amt);
			staffGoalVo.setMar_amt(mar_amt);
			staffGoalVo.setApr_amt(apr_amt);
			staffGoalVo.setMay_amt(may_amt);
			staffGoalVo.setJun_amt(jun_amt);
			staffGoalVo.setJly_amt(jly_amt);
			staffGoalVo.setAgt_amt(agt_amt);
			staffGoalVo.setSep_amt(sep_amt);
			staffGoalVo.setOct_amt(oct_amt);
			staffGoalVo.setNov_amt(nov_amt);
			staffGoalVo.setDec_amt(dec_amt);
			
			System.out.println(staffGoalVo.toString());
			//list에 저장
			list.add(staffGoalVo);
		}
		book.close();
		return list;
	}*/
	
}

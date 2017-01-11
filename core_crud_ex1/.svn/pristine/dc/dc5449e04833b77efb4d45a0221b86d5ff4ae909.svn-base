package com.crm.cp.sales.staffgoal.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.staffgoal.service.StaffGoalService;
import com.crm.cp.sales.staffgoal.vo.StaffGoalSumVo;
import com.crm.cp.sales.staffgoal.vo.StaffGoalVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.StaffExcelUploadService;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/16  
 * 내용 : 담당자별 목표 화면에 대한 Controller 작성
 * 
 */

@Controller
public class StaffGoalController {
	
	//메뉴 조회용 Service
	@Autowired
	MenuService menuService;
	
	//담당자별 목표 조회용 Service
	@Autowired
	StaffGoalService staffGoalService;
	
	@RequestMapping(value = "/staffgoal", method = RequestMethod.GET)
	public ModelAndView StaffGoalList(HttpSession session, HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView mov;
		HashMap<String, Object> map =null;
		String param_year = "";
		String param_orgid = "";
		List<StaffGoalSumVo> orgList = null;
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			map = new HashMap<String, Object>();
			param_year = request.getParameter("year");
			
			param_orgid = request.getParameter("param_org_id");
			
			if (param_year == null || param_year == "") {
				Calendar cal = Calendar.getInstance();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
				map.put("year",sdf.format(cal.getTime())); 
			}
			else {
				map.put("year", param_year);
			}
			
			if (param_orgid == null || param_orgid == "") {
				String user = (String) session.getAttribute("user");
				map.put("reg_id", user);
				StaffGoalVo orgVO = staffGoalService.getOrg_id(user);
				map.put("org_id", orgVO.getOrg_id());
				map.put("emp_cd", orgVO.getEmp_cd());
			}
			else {
				map.put("org_id", param_orgid);
			}
			
			// 메뉴 List 조회
			List<MenuVO> menuList = menuService.selectAll(session);
			
			//팀별목표 List 조회
			List<StaffGoalSumVo> staffGoalList = staffGoalService.getSumStaffGoal(map);
			// 부서 selectbox 조회
			orgList = staffGoalService.QueryOrg("Y");
			
			mov = new ModelAndView("staffgoal");
			mov.addObject("menuList", menuList);
			mov.addObject("staffGoalList", staffGoalList);
			mov.addObject("orgList", orgList);
			mov.addObject("year", map.get("year"));
			System.out.println(map.get("org_id"));
			mov.addObject("org_id", map.get("org_id"));
			
		}
		return mov;
		
	}
	
	@RequestMapping(value = "/staffgoalsch", method = RequestMethod.GET)
	   public ModelAndView StaffGoalListSch(HttpSession session, HttpServletRequest request, HttpServletResponse response) {
	      
	      ModelAndView mov;
	      HashMap<String, Object> map =null;
	      String param_year = "";
	      String param_orgid = "";
	      List<StaffGoalSumVo> orgList = null;
	      
	      if (session.getAttribute("user") == null) {      //로그인 페이지 이동
	         mov = new ModelAndView("standard/home/session_expire");
	      } else {
	         map = new HashMap<String, Object>();
	         param_year = request.getParameter("year");
	         param_orgid = request.getParameter("param_org_id");
	         
	         if (param_year == null || param_year == "") {
	            Calendar cal = Calendar.getInstance();
	            SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
	            map.put("year",sdf.format(cal.getTime())); 
	         }
	         else {
	            map.put("year", param_year);
	         }
	         
	         if (param_orgid == null || param_orgid == "") {
	            map.put("org_id", null);
	         }
	         else {
	            map.put("org_id", param_orgid);
	         }
	         
	         
	         // 메뉴 List 조회
	         List<MenuVO> menuList = menuService.selectAll(session);
	         
	         //팀별목표 List 조회
	         List<StaffGoalSumVo> staffGoalList = staffGoalService.getSumStaffGoalSch(map);
	         // 부서 selectbox 조회

	         orgList = staffGoalService.QueryOrg("Y");
	         
	         mov = new ModelAndView("staffgoal");
	         mov.addObject("menuList", menuList);
	         mov.addObject("staffGoalList", staffGoalList);
	         mov.addObject("orgList", orgList);
	         mov.addObject("year", map.get("year"));
	         mov.addObject("org_id", map.get("org_id"));
	         
	      }
	      return mov;
	      
	   }
	
	/**
	 * 목표 엑셀 Down 기능
	 *   - 서버에 있는 엑셀 파일 다운로드
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/StaffExceldownload.do", method=RequestMethod.GET)
	public ModelAndView downloadRequest( HttpSession session, HttpServletRequest request, HttpServletResponse response) throws Exception {
		File downLoadFile = getFile(request);
		return new ModelAndView("download", "fileDownload", downLoadFile);
//		List<TeamExcelViewVo> viewList = null;
//		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
//			return  new ModelAndView("standard/login/login");
//		} else {
//			// ExcelView 용 데이터 조회
//			viewList = this.teamGoalService.getTeamExcelView();
//			System.out.println(viewList.toString());
//		}
//		return new ModelAndView("exceldown", "viewList", viewList);
	}
	
	/**
	 * 파일 생성 Function
	 * @param request
	 * @return
	 */
	public File getFile(HttpServletRequest request){ //다운로드 폴더에서 파일객체를생성한다.
//		  String path = "C:/upload/";
		  String path = "/root/다운로드/";
		  String filename = request.getParameter("filename");
		  
		  return new File(path, filename);
	}
	
	/**
	 * 담당자별 목표 파일업로드 폼 호출
	 * @return
	 */
	@RequestMapping(value="/StaffExcelUpload.do", method=RequestMethod.GET) 
	public ModelAndView fileuploadForm(HttpSession session) {
		ModelAndView mov = new ModelAndView();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		}
		else {
			mov.addObject("goal", "담당자별 목표");
			mov.setViewName("/sales/goal/ExcelUpload");
		}
		return mov;
	}
	
	/**
	 * 엑셀 업로드 수행
	 *   1. 담당자별 목표 파일업로드에서 받은 파일 업로드
	 *   2. 업로드한 파일의 내용을 List로 뽑기
	 *   3. 뽑은 List를 DB에 insert
	 *   
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value="/StaffExcelUpload.do", method=RequestMethod.POST) 
	@ResponseBody
	public String  fileUpload(HttpSession session, MultipartHttpServletRequest request, HttpServletResponse response) {
		String result = ""; 
		int res = 0;
		StaffExcelUploadService excelUploadService = null;
		
		//엑셀 업로드용
		List<StaffGoalVo> list = null;
		// 등록 가능여부 조회
		HashMap<String, Object> AvailMap = null;
		// 팀별목표 수정 
		HashMap<String, Object> ModiMap = null;
		// 팀별목표 저장
		HashMap<String, Object> insertMap = null;
		
		// 등록 가능여부 count
		int count = 0; 
		
		if(session.getAttribute("user") == null) {
			return "standard/home/session_expire";
		}
		else {
			excelUploadService = new StaffExcelUploadService();
			list = new ArrayList<StaffGoalVo>();
			
			list = excelUploadService.excelFileUpload(request);
			
			if(list.size() != 0) {
				for(int i=0; i < list.size(); i++) {
					AvailMap = new HashMap<String, Object>();
					AvailMap.put("base_year", list.get(i).getBase_year());
					AvailMap.put("org_id", list.get(i).getOrg_id());
					AvailMap.put("reg_id", list.get(i).getReg_id());
					try {
						count = this.staffGoalService.AvailiableStaffGoal(AvailMap);
					}catch(IllegalArgumentException e) {
						System.out.println(e.getMessage());
					}
					
					if (count != 0) {
						ModiMap = new HashMap<String, Object>();
						ModiMap.put("list", list.get(i));
						ModiMap.put("user_id", session.getAttribute("user"));
						ModiMap.put("base_year", list.get(i).getBase_year());
						ModiMap.put("org_id", list.get(i).getOrg_id());
						ModiMap.put("reg_id", list.get(i).getReg_id());
						
						res = this.staffGoalService.ModiStaffGoal(ModiMap);
					}
					else {
						insertMap = new HashMap<String, Object>();
						insertMap.put("list", list.get(i));
						insertMap.put("user_id", session.getAttribute("user"));
						
						res = this.staffGoalService.InsertStaffGoal(insertMap);
					}
				}
			}
			
			if(res == 1) {
				result = "Y";
			}else {
				result = "N";
			}
		}
		return result; 
	}
	
	@RequestMapping(value="/UpdateStaffGoal.do", method=RequestMethod.POST)
	@ResponseBody
	public HashMap<String, Object> insertTeamGoal(HttpSession session, 
			@RequestBody List<Object> json, HttpServletResponse response) {
		HashMap<String, Object> map = new HashMap<String, Object>();

		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			map.put("result", "standard/home/session_expire");
		}
		else {
			for (int i = 0; i < json.size(); i++) {
				map = new HashMap<String, Object>();
				if(json.get(i) != null){
					map = (HashMap<String, Object>) json.get(i);
					if (json.size() > 0) {
						int result = 0;
						ArrayList<String> list = (ArrayList<String>) map.get("amt_array");	//클라이언트에서 받은 array를 List로 변경
						StaffGoalVo staffGoalVo = new StaffGoalVo();
						
						staffGoalVo.setBase_year((String) map.get("year"));
						staffGoalVo.setOrg_id((String) map.get("org"));
						staffGoalVo.setReg_id((String) map.get("reg_id"));
						staffGoalVo.setJan_amt(Long.parseLong(list.get(0)));
						staffGoalVo.setFeb_amt(Long.parseLong(list.get(1)));
						staffGoalVo.setMar_amt(Long.parseLong(list.get(2)));
						staffGoalVo.setApr_amt(Long.parseLong(list.get(3)));
						staffGoalVo.setMay_amt(Long.parseLong(list.get(4)));
						staffGoalVo.setJun_amt(Long.parseLong(list.get(5)));
						staffGoalVo.setJly_amt(Long.parseLong(list.get(6)));
						staffGoalVo.setAgt_amt(Long.parseLong(list.get(7)));
						staffGoalVo.setSep_amt(Long.parseLong(list.get(8)));
						staffGoalVo.setOct_amt(Long.parseLong(list.get(9)));
						staffGoalVo.setNov_amt(Long.parseLong(list.get(10)));
						staffGoalVo.setDec_amt(Long.parseLong(list.get(11)));
						
						result = this.staffGoalService.UpdateStaffGoal(staffGoalVo);
						
						if (result == 1) {
							map.put("result", "Y");
							map.put("queryorg", map.get("queryorg"));
							map.put("queryteam", map.get("queryteam"));
						}else {
							map.put("result", "N");
						}
					}
					else {
						map.put("result", "N");
					}
				}
			}
		}
		
		return map; 
	}
}

package com.crm.cp.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

/**
 * 목표 엑셀 Down을 위한 Class
 * @author Administrator
 *
 */
public class ExcelDownLoad extends AbstractView {

	public ExcelDownLoad() {
//		this.setContentType("text/html; charset=utf-8");
//		this.setContentType("application/download; charset=utf-8");
		this.setContentType("application/octet-stream");
	}
	
	@Override
	protected void renderMergedOutputModel(Map<String, Object> model,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println("호출");
		File file = (File) model.get("fileDownload");
//		String type=model.get("type").toString();
		String filename = "";
		System.out.println("file : "+file);
		response.setContentType(getContentType());
		response.setContentLength((int) file.length());
		
		String userAgent = request.getHeader("User-Agent");
//		boolean ie = userAgent.indexOf("MSIE") > -1;
		 
		if (userAgent.contains("MSIE") || userAgent.contains("Trident") || userAgent.contains("Chrome")) {
			filename = URLEncoder.encode(file.getName(), "utf-8");
//			filename = file.getName();
			System.out.println("파일명(ie true) : "+filename);
		}else {
			filename = new String(file.getName().getBytes("utf-8"),"ISO-8859-1");
//			filename = file.getName();
			System.out.println("파일명(ie false) : "+filename);
		}
		
		response.setHeader("Content-Disposition", "attachment; fileName=\""+filename+"\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setContentType("application/octer-stream");
		
		OutputStream out = response.getOutputStream();
		FileInputStream fis = null;

		try {
			fis = new FileInputStream(file);
			FileCopyUtils.copy(fis, out);
		} finally {
			if (fis != null) {
				try {
					fis.close();
				} catch (IOException ex) {
					ex.printStackTrace();
				}
			}
		}
		out.flush();
	}

}
